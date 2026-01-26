---
type: property
interface: IWeldmentCutListAnnotation
member: GetColumnCustomProperty
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: Column for which to get the custom property
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldmentCutListAnnotation.GetAllCustomPropertiesCount
  - IWeldmentCutListAnnotation.SetColumnCustomProperty
keywords:
  - getcolumncustomproperty
  - iweldmentcutlistannotation
  - weldment
  - cut
  - list
  - annotation
  - column
  - custom
  - index
  - int32
  - string
readonly: null
---

# IWeldmentCutListAnnotation.GetColumnCustomProperty

Gets the custom property for the specified user-defined column.

## Signature

```csharp
System.String GetColumnCustomProperty( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Column for which to get the custom property

## Return Value

Custom property for this user-defined column

## Remarks

This method returns an empty string if the column is not a user-defined column.
To get the list of custom properties, use
IWeldmentCutListAnnotation::GetAllCustomProperties
or
IWeldmentCutListAnnotation::IGetAllCustomProperties
. The list of possible custom properties includes all of the items in the weldment cut list annotation table, which includes items from the file summary items and file custom properties that have been set.

## See Also

- `IWeldmentCutListAnnotation.GetAllCustomPropertiesCount`
- `IWeldmentCutListAnnotation.SetColumnCustomProperty`