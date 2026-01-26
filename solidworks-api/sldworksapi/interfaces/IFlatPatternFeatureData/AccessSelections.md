---
type: method
interface: IFlatPatternFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: System.Object
    description: Top-level document (see Remarks )
  -
    name: Component
    type: System.Object
    description: Component in which the feature is to be modified (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IFlatPatternFeatureData.IAccessSelections2
keywords:
  - accessselections
  - iflatpatternfeaturedata
  - flat
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
  - fixed
  - face
  - vba
---

# IFlatPatternFeatureData.AccessSelections

Gains access to the selections that describe this Flat-Pattern feature.

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

- `TopDoc` (System.Object): Top-level document (see Remarks )
- `Component` (System.Object): Component in which the feature is to be modified (see Remarks )

## Return Value

True if the selections are successfully accessed, false if not

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
if you modified the feature
IFlatPatternFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Get Fixed Face of Flat-Pattern Feature (VBA) (Get_Fixed_Face_of_Flat-Pattern_Feature_Example_VB.htm)

## See Also

- `IFlatPatternFeatureData.IAccessSelections2`