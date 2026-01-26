---
type: method
interface: IBomTableAnnotation
member: GetComponentsCount
returns: System.Int32
parameters:
  -
    name: RowIndex
    type: System.Int32
    description: Row in the BOM table where to get the number of components; 0-based index
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IBomTableAnnotation.GetComponents
keywords:
  - getcomponentscount
  - ibomtableannotation
  - bom
  - table
  - annotation
  - components
  - count
  - row
  - index
  - int32
---

# IBomTableAnnotation.GetComponentsCount

Obsolete. Superseded by IBomTableAnnotation::GetComponentsCount2.

## Signature

```csharp
System.Int32 GetComponentsCount( 
   System.Int32
RowIndex
)
```
## Parameters

- `RowIndex` (System.Int32): Row in the BOM table where to get the number of components; 0-based index

## Return Value

Number of components in the specified row

## Remarks

Call this method before calling
IBomTableAnnotation::IGetComponents
to determine the size of the array for that method.

## See Also

- `IBomTableAnnotation.GetComponents`