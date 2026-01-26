---
type: method
interface: IBomTableAnnotation
member: IGetComponents2
returns: Component2
parameters:
  -
    name: RowIndex
    type: System.Int32
    description: Row in the BOM table where to get the components; 0-based index
  -
    name: Configuration
    type: System.String
    description: Configuration for which to count components in top-level only BOMs; specify an empty string for parts only and indented BOMs
  -
    name: Count
    type: System.Int32
    description: Number of components in the specified row
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IBomTableAnnotation.GetComponents2
keywords:
  - bill
  - materials
  - components
  - see
  - also
  - icomponent2
  - bom
  - table
  - igetcomponents2
  - ibomtableannotation
  - annotation
  - components2
  - row
  - index
  - int32
  - configuration
  - string
  - count
  - component2
---

# IBomTableAnnotation.IGetComponents2

Gets the components in the specified row for the specified configuration in this BOM table annotation.

## Signature

```csharp
Component2 IGetComponents2( 
   System.Int32
RowIndex
,
   System.String
Configuration
,
   System.Int32
Count
)
```
## Parameters

- `RowIndex` (System.Int32): Row in the BOM table where to get the components; 0-based index
- `Configuration` (System.String): Configuration for which to count components in top-level only BOMs; specify an empty string for parts only and indented BOMs
- `Count` (System.Int32): Number of components in the specified row

## Return Value

in-process, unmanaged C++: Pointer to an array of components in the specified row for the specified configuration VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IBomTableAnnotation::GetComponentsCount2
to get the value of Count.

## See Also

- `IBomTableAnnotation.GetComponents2`