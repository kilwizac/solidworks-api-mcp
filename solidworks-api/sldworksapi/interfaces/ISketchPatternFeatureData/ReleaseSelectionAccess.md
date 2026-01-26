---
type: method
interface: ISketchPatternFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
  - sketches
related: []
keywords:
  - releaseselectionaccess
  - isketchpatternfeaturedata
  - sketch
  - pattern
  - feature
  - data
  - release
  - selection
  - access
  - void
---

# ISketchPatternFeatureData.ReleaseSelectionAccess

Releases access to the selections that created this sketch pattern feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISketchPatternFeatureData::AccessSelections
and
ISketchPatternFeatureData::IAccessSelections2
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- ISketchPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchPatternFeatureData)