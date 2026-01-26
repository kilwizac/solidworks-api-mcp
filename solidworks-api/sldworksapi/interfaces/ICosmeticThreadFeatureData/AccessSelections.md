---
type: method
interface: ICosmeticThreadFeatureData
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
  - ICosmeticThreadFeatureData.IAccessSelections
keywords:
  - accessselections
  - icosmeticthreadfeaturedata
  - cosmetic
  - thread
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
  - threads
  - features
  - part
  - vba
---

# ICosmeticThreadFeatureData.AccessSelections

Gains access to the selections that define this cosmetic thread feature.

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
or
IFeature::IModifyDefinition2
if you modified the feature
ICosmeticThreadFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Get Cosmetic Threads Features in a Part (VBA) (Get_Cosmetic_Threads_in_a_Part_Document_Example_VB.htm)

## See Also

- `ICosmeticThreadFeatureData.IAccessSelections`