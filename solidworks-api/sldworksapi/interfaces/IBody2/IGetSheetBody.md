---
type: method
interface: IBody2
member: IGetSheetBody
returns: Body2
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of sheet body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetSheetBody
keywords:
  - sheet
  - bodies
  - igetsheetbody
  - ibody2
  - body2
  - body
  - index
  - int32
---

# IBody2.IGetSheetBody

Gets a sheet (surface) body in this body.

## Signature

```csharp
Body2 IGetSheetBody( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of sheet body

## Return Value

Pointer to the sheet body corresponding to the index

## See Also

- `IBody2.GetSheetBody`