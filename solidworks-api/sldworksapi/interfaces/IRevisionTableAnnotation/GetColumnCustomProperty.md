---
type: property
interface: IRevisionTableAnnotation
member: GetColumnCustomProperty
returns: System.String
parameters:
  -
    name: Index
    type: System.Int32
    description: Column from which to get the custom property
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IRevisionTableAnnotation.GetAllCustomPropertiesCount
  - IRevisionTableAnnotation.SetColumnCustomProperty
keywords:
  - custom
  - properties
  - see
  - also
  - icustompropertymanager
  - revision
  - tables
  - irevisiontableannotation
  - irevisiontablefeature
  - interfaces
  - getcolumncustomproperty
  - table
  - annotation
  - column
  - index
  - int32
  - string
readonly: null
---

# IRevisionTableAnnotation.GetColumnCustomProperty

Gets the custom property used for the values in a specified user-defined column.

## Signature

```csharp
System.String GetColumnCustomProperty( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Column from which to get the custom property

## Return Value

Custom property used for the values in this user-defined column

## Remarks

This method returns a empty string if the column is not a user-defined column.
To get the list of custom properties, use
IRevisonTableAnnotation::GetAllCustomProperties
or
IRevisionTableAnnotation::IGetAllCustomProperties
. The list of available custom properties includes all of the items in the revision table, which includes items from the file summary items and file custom properties that have been set.

## See Also

- `IRevisionTableAnnotation.GetAllCustomPropertiesCount`
- `IRevisionTableAnnotation.SetColumnCustomProperty`