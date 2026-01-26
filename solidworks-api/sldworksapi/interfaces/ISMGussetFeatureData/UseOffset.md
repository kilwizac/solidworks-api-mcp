---
type: property
interface: ISMGussetFeatureData
member: UseOffset
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISMGussetFeatureData.FlipOffset
keywords:
  - useoffset
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - use
  - offset
  - boolean
readonly: null
---

# ISMGussetFeatureData.UseOffset

Gets or sets whether to offset the gusset section plane from a specified reference point.

## Signature

```csharp
System.Boolean UseOffset {get; set;}
```
## Parameters

None.

## Return Value

True to offset the gusset section plane, false to not

## Remarks

After setting this property to true, set the
offset distance
.
If a reference point is not set, the offset is applied to an assumed reference point. For insertion of the first gusset, the assumed reference point is on the end of the sheet metal bend. For second and subsequent gusset insertions, the assumed reference point is on the edge of the gusset last inserted.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)

## See Also

- `ISMGussetFeatureData.FlipOffset`