---
type: method
interface: ITablePatternFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: System.Object
    description: Top-level document
  -
    name: Component
    type: System.Object
    description: Component for the feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - ITablePatternFeatureData.IAccessSelections2
keywords:
  - accessselections
  - itablepatternfeaturedata
  - table
  - pattern
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
  - driven
  - properties
  - vba
  - points
  - repeating
  - elements
  - patterns
  - vb
  - net
---

# ITablePatternFeatureData.AccessSelections

Gains access to selections used to define the table-driven pattern feature.

## Signature

```csharp
System.Boolean AccessSelections( 
   System.Object
TopDoc
,
   System.Object
Component
)
```
## Parameters

- `TopDoc` (System.Object): Top-level document
- `Component` (System.Object): Component for the feature

## Return Value

Component for the feature

## Remarks

To modify a feature in a...
Then...
Part
TopDoc argument is the
IModelDoc2
for the part
Component argument is NULL
Assembly
TopDoc is the IModelDoc2 object for the assembly
Component argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you modified the feature
ITablePatternFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Get Table-driven Pattern Properties (VBA) (Get_Table-driven_Pattern_Properties_Example_VB.htm)
- Get Points of Repeating Elements in Table-driven Pattern (C#) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_CSharp.htm)
- Get Points of Repeating Elements in Table-driven Patterns (VB.NET) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_VBNET.htm)
- Get Points of Repeating Elements in Table-driven Pattern (VBA) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_VB.htm)

## See Also

- `ITablePatternFeatureData.IAccessSelections2`