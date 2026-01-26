---
type: method
interface: IPMIGtolBoxData
member: GetTolTypes
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - gettoltypes
  - ipmigtolboxdata
  - ipmi
  - gtol
  - box
  - data
  - tol
  - types
  - object
---

# IPMIGtolBoxData.GetTolTypes

Gets the tolerance zone types in this PMI Gtol frame box.

## Signature

```csharp
System.Object GetTolTypes()
```
## Parameters

None.

## Return Value

Array of tolerance zone types as defined in swGtolTolType_e

## Remarks

The tolerance zone types returned by this method map on-to-one and onto with tolerance zone values returned by
IPMIGtolBoxData::GetTolTypeValues
.