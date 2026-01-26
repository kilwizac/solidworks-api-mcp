---
type: property
interface: IRevisionTableAnnotation
member: SetColumnCustomProperty
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Column for which to get the custom property
  -
    name: CustomProp
    type: System.String
    description: Custom property used for the values in this user-defined column
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IRevisionTableAnnotation.GetAllCustomPropertiesCount
  - IRevisionTableAnnotation.GetColumnCustomProperty
keywords:
  - setcolumncustomproperty
  - irevisiontableannotation
  - revision
  - table
  - annotation
  - column
  - custom
  - index
  - int32
  - prop
  - string
  - boolean
readonly: null
---

# IRevisionTableAnnotation.SetColumnCustomProperty

Sets the custom property used for the values in a specified user-defined column.

## Signature

```csharp
System.Boolean SetColumnCustomProperty( 
   System.Int32
Index
,
   System.String
CustomProp
)
```
## Parameters

- `Index` (System.Int32): Column for which to get the custom property
- `CustomProp` (System.String): Custom property used for the values in this user-defined column

## Return Value

True if custom property is successfully set, false if not

## Remarks

Use this method to create a user-defined column where each row in the column is automatically filled in with the custom property value. The default title for the column is the name of the custom property. If the specified custom property is not a valid custom property, then each row in the column remains empty.
To create a user-defined column that is not attached to a custom property; for example, you want to fill in each row of the column yourself, use this method with the CustomProp value specified as the title of the column.
To get the list of available custom properties, use
IRevisionTableAnnotation::GetAllCustomProperties
or
IRevisionTableAnnotation::IGetAllCustomProperties
. The list of possible custom properties includes all of the items in the revision table, which includes items from the file summary items and file custom properties that have been set.
This method returns false if the column is not a user-defined column, and no action is taken.

## See Also

- `IRevisionTableAnnotation.GetAllCustomPropertiesCount`
- `IRevisionTableAnnotation.GetColumnCustomProperty`