---
type: method
interface: ICurveDrivenPatternFeatureData
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
related: []
keywords:
  - accessselections
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
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
  - create
  - vb
  - net
  - vba
---

# ICurveDrivenPatternFeatureData.AccessSelections

Gains access to the selections that define this curve-driven pattern feature.

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
if you modified the feature
ICurveDrivenPatternFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Create and Access Curve-driven Pattern Feature (C#) (Create_and_Access_Curve-driven_Pattern_Feature_Example_CSharp.htm)
- Create and Access Curve-driven Pattern Feature (VB.NET) (Create_and_Access_Curve-driven_Pattern_Feature_Example_VBNET.htm)
- Create and Access Curve-driven Pattern Feature (VBA) (Create_and_Access_Curve-driven_Pattern_Feature_Example_VB.htm)