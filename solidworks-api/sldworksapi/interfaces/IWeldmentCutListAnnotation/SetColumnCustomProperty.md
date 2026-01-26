---
type: property
interface: IWeldmentCutListAnnotation
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
    description: Custom property for this user-defined column
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IWeldmentCutListAnnotation.GetColumnCustomProperty
keywords:
  - setcolumncustomproperty
  - iweldmentcutlistannotation
  - weldment
  - cut
  - list
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

# IWeldmentCutListAnnotation.SetColumnCustomProperty

Sets the custom property of the specified user-defined column.

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
- `CustomProp` (System.String): Custom property for this user-defined column

## Return Value

True if the custom property is set, false if not

## Remarks

Use this method to create a user-defined column where each row in the column is automatically filled in with the custom property value for that particular configuration. The default title for the column is the name of the custom property. If the specified custom property is not a valid custom property, then each row in the column remains empty.
To create a user-defined column that is not attached to a custom property; for example, you want to fill in each row of the column yourself, use this method with the CustomProp value specified as the title of the column.
To get the list of available custom properties, use
IWeldmentCutListAnnotation::GetAllCustomProperties
or
IWeldmentCustListAnnotation::IGetAllCustomProperties
. The list of available custom properties includes all of the items in the weldment cut-list table, which includes items from the file summary items and file custom properties that have been set.
This method returns false if the column is not a user-defined column, and no action is taken.

## See Also

- `IWeldmentCutListAnnotation.GetColumnCustomProperty`