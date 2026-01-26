---
type: method
interface: IDerivedPatternFeatureData
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
    description: Component in which the feature is to be modified
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IDerivedPatternFeatureData.IAccessSelections2
keywords:
  - accessselections
  - iderivedpatternfeaturedata
  - derived
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
  - seed
  - components
  - vb
  - net
  - vba
  - number
  - instances
  - skipped
  - driving
---

# IDerivedPatternFeatureData.AccessSelections

Gains access to the selections that describe this derived pattern feature.

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
- `Component` (System.Object): Component in which the feature is to be modified

## Return Value

True if the selections were successfully accessed, false if not

## Remarks

To modify a feature in a...
Then...
Part
TopDoc argument is the
IModelDoc2
for the part
Component argument is Nothing or null
Assembly
TopDoc is the IModelDoc2 object for the assembly
Component argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
and
IFeature::IModifyDefinition2
if you modified the feature
IDerivedPatternFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Get and Set Seed Components (C#) (Get_and_Set_Seed_Components_Example_CSharp.htm)
- Get and Set Seed Components (VB.NET) (Get_and_Set_Seed_Components_Example_VBNET.htm)
- Get and Set Seed Components (VBA) (Get_and_Set_Seed_Components_Example_VB.htm)
- Get Number of Instances Skipped in Driving Feature (C#) (Get_Number_of_Instances_Skipped_in_Driving_Feature_Example_CSharp.htm)
- Get Number of Instances Skipped in Driving Feature (VB.NET) (Get_Number_of_Instances_Skipped_in_Driving_Feature_Example_VBNET.htm)
- Get Number of Instances Skipped in Driving Feature (VBA) (Get_Number_of_Instances_Skipped_in_Driving_Feature_Example_VB.htm)

## See Also

- `IDerivedPatternFeatureData.IAccessSelections2`