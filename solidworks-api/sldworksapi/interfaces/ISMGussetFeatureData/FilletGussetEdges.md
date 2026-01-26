---
type: property
interface: ISMGussetFeatureData
member: FilletGussetEdges
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
  - filletgussetedges
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - fillet
  - edges
  - boolean
readonly: null
---

# ISMGussetFeatureData.FilletGussetEdges

Gets or sets whether to fillet the edges of this gusset.

## Signature

```csharp
System.Boolean FilletGussetEdges {get; set;}
```
## Parameters

None.

## Return Value

True to fillet the edges of this gusset, false to not

## Remarks

This property is valid only if
ISMGussetFeatureData::GussetType
is set to 1.
After setting this property, set
ISMGussetFeatureData::EdgeFilletRadius
.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)