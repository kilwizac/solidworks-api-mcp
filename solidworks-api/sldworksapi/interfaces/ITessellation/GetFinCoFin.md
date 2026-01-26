---
type: method
interface: ITessellation
member: GetFinCoFin
returns: System.Int32
parameters:
  -
    name: FinId
    type: System.Int32
    description: Fin ID that to use to return the cofin ID
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - getfincofin
  - itessellation
  - tessellation
  - fin
  - co
  - id
  - int32
---

# ITessellation.GetFinCoFin

Gets the ID of the CoFin that is shared by a fin.

## Signature

```csharp
System.Int32 GetFinCoFin( 
   System.Int32
FinId
)
```
## Parameters

- `FinId` (System.Int32): Fin ID that to use to return the cofin ID

## Return Value

Long or integer value that describes the ID number of the cofin