---
type: method
interface: IDrawingDoc
member: GetPenInfo
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.IGetPenInfo
keywords:
  - getpeninfo
  - idrawingdoc
  - drawing
  - doc
  - pen
  - info
  - object
---

# IDrawingDoc.GetPenInfo

Gets information about the pens used in SOLIDWORKS.

## Signature

```csharp
System.Object GetPenInfo()
```
## Parameters

None.

## Return Value

Array containing an array of longs or integers (see Long vs. Integer and see Remarks )

## Remarks

The return value is the following array:
[
font, weight, color
]

## See Also

- `IDrawingDoc.IGetPenInfo`