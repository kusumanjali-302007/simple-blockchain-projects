import hashlib, json, time

class Block:
    def __init__(self,index,data,previous_hash="0"):
        self.index=index; self.timestamp=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()); self.data=data; self.previous_hash=previous_hash; self.hash=self.calculate_hash()
    def calculate_hash(self):
        raw=f"{self.index}{self.timestamp}{self.data}{self.previous_hash}".encode()
        return hashlib.sha256(raw).hexdigest()
    def to_dict(self): return {"Index":self.index,"Timestamp":self.timestamp,"Data":self.data,"Previous Hash":self.previous_hash,"Hash":self.hash}

class Blockchain:
    def __init__(self): self.chain=[Block(0,"Genesis Block")]
    def add_block(self,data): self.chain.append(Block(len(self.chain),data,self.chain[-1].hash))
    def validate_chain(self):
        for i in range(1,len(self.chain)):
            b=self.chain[i]; prev=self.chain[i-1]
            if b.hash != b.calculate_hash() or b.previous_hash != prev.hash: return False
        return True

if __name__=="__main__":
    bc=Blockchain(); print("Simple Blockchain Demo")
    for _ in range(2): bc.add_block(input("Enter block data: "))
    print("\nOriginal chain:"); print(json.dumps([b.to_dict() for b in bc.chain],indent=2)); print("Valid:",bc.validate_chain())
    try:
        i=int(input("\nEnter block index to tamper (1 or 2): ")); bc.chain[i].data=input("New data: "); print("\nAfter tampering:"); print(json.dumps([b.to_dict() for b in bc.chain],indent=2)); print("Valid:",bc.validate_chain())
    except (ValueError,IndexError): print("No valid tampering performed.")
