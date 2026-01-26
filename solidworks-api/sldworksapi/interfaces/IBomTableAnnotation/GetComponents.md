---
type: method
interface: IBomTableAnnotation
member: GetComponents
returns: System.Object
parameters:
  -
    name: RowIndex
    type: System.Int32
    description: Row in the BOM table where to get the components; 0-based index
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IBomTableAnnotation.GetComponentsCount
  - IBomTableAnnotation.IGetComponents
keywords:
  - getcomponents
  - ibomtableannotation
  - bom
  - table
  - annotation
  - components
  - row
  - index
  - int32
  - object
---

# IBomTableAnnotation.GetComponents

Obsolete. Superseded by IBomTableAnnotation::GetComponents2.

## Signature

```csharp
System.Object GetComponents( 
   System.Int32
RowIndex
)
```
## Parameters

- `RowIndex` (System.Int32): Row in the BOM table where to get the components; 0-based index

## Return Value

Array of components in the specified row

## See Also

- `IBomTableAnnotation.GetComponentsCount`
- `IBomTableAnnotation.IGetComponents`