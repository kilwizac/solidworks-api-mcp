---
type: method
interface: ICurveDrivenPatternFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - releaseselectionaccess
  - icurvedrivenpatternfeaturedata
  - curve
  - driven
  - pattern
  - feature
  - data
  - release
  - selection
  - access
  - void
  - create
  - vb
  - net
  - vba
---

# ICurveDrivenPatternFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this curve-driven pattern feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ICurveDrivenPatternFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
if you did.

## Examples

- Create and Access Curve-driven Pattern Feature (C#) (Create_and_Access_Curve-driven_Pattern_Feature_Example_CSharp.htm)
- Create and Access Curve-driven Pattern Feature (VB.NET) (Create_and_Access_Curve-driven_Pattern_Feature_Example_VBNET.htm)
- Create and Access Curve-driven Pattern Feature (VBA) (Create_and_Access_Curve-driven_Pattern_Feature_Example_VB.htm)