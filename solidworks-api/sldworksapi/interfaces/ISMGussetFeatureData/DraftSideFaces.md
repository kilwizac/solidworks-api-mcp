---
type: property
interface: ISMGussetFeatureData
member: DraftSideFaces
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - draftsidefaces
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - draft
  - side
  - faces
  - boolean
readonly: null
---

# ISMGussetFeatureData.DraftSideFaces

Gets or sets whether to draft the side faces of this gusset.

## Signature

```csharp
System.Boolean DraftSideFaces {get; set;}
```
## Parameters

None.

## Return Value

True to draft the gusset side faces, false to not

## Remarks

After setting this property to true, set
ISMGussetFeatureData::DraftAngle
.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)