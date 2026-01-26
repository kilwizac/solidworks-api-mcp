---
type: method
interface: IDrawingDoc
member: IGetPenInfo
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.GetPenCount
  - IDrawingDoc.GetPenInfo
keywords:
  - igetpeninfo
  - idrawingdoc
  - drawing
  - doc
  - pen
  - info
  - int32
---

# IDrawingDoc.IGetPenInfo

Gets information about the pens used in SOLIDWORKS.

## Signature

```csharp
System.Int32 IGetPenInfo()
```
## Parameters

None.

## Return Value

in-porcess, unmanaged C++: Pointer to an array of longs (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value is the following array of longs:
[
font, weight, color
]

## See Also

- `IDrawingDoc.GetPenCount`
- `IDrawingDoc.GetPenInfo`