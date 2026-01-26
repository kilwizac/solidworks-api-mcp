---
type: method
interface: IPMIGtolBoxData
member: GetTolTypeValues
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IPMIGtolBoxData.Unit
keywords:
  - gettoltypevalues
  - ipmigtolboxdata
  - ipmi
  - gtol
  - box
  - data
  - tol
  - type
  - values
  - object
---

# IPMIGtolBoxData.GetTolTypeValues

Gets the tolerance zone values in this PMI Gtol frame box.

## Signature

```csharp
System.Object GetTolTypeValues()
```
## Parameters

None.

## Return Value

Array of tolerance zone values

## Remarks

The array returned by this method maps one-to-one and onto with the array returned by
IPMIGtolBoxData::GetTolTypes
.

## See Also

- `IPMIGtolBoxData.Unit`