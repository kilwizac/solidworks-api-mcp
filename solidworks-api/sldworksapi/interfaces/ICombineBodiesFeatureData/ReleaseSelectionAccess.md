---
type: method
interface: ICombineBodiesFeatureData
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
  - icombinebodiesfeaturedata
  - combine
  - bodies
  - feature
  - data
  - release
  - selection
  - access
  - void
  - vb
  - net
  - vba
---

# ICombineBodiesFeatureData.ReleaseSelectionAccess

Releases access to the selections that define this combine feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ICombineBodiesFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
if you did.

## Examples

- Combine Bodies (C#) (Combine_Bodies_Example_CSharp.htm)
- Combine Bodies (VB.NET) (Combine_Bodies_Example_VBNET.htm)
- Combine Bodies (VBA) (Combine_Bodies_Example_VB.htm)