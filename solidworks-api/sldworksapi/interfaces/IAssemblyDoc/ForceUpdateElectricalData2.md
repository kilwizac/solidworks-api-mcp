---
type: method
interface: IAssemblyDoc
member: ForceUpdateElectricalData2
returns: System.Int32
parameters:
  -
    name: Stream
    type: System.Int32
    description: Stream as defined in swElectricalStreamType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - forceupdateelectricaldata2
  - iassemblydoc
  - assembly
  - doc
  - force
  - update
  - electrical
  - data2
  - stream
  - int32
---

# IAssemblyDoc.ForceUpdateElectricalData2

Forces an update of electrical data.

## Signature

```csharp
System.Int32 ForceUpdateElectricalData2( 
   System.Int32
Stream
)
```
## Parameters

- `Stream` (System.Int32): Stream as defined in swElectricalStreamType_e

## Return Value

Status of update as defined in swForceUpdateElectricalDataError_e

## Remarks

Third-party applications should use this method to tell the SOLIDWORKS Design software that they have changed the electrical data. The SOLIDWORKS Design software then re-reads the data to get the updates.