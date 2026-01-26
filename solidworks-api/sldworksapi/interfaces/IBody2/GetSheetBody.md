---
type: method
interface: IBody2
member: GetSheetBody
returns: System.Object
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
  - IBody2.IGetSheetBody
keywords:
  - sheet
  - bodies
  - getsheetbody
  - ibody2
  - body2
  - body
  - index
  - int32
  - object
---

# IBody2.GetSheetBody

Gets a sheet (surface) body in this body.

## Signature

```csharp
System.Object GetSheetBody( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of sheet body

## Return Value

Sheet body corresponding to the index

## See Also

- `IBody2.IGetSheetBody`