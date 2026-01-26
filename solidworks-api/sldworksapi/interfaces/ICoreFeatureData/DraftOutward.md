---
type: property
interface: ICoreFeatureData
member: DraftOutward
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoreFeatureData.DraftAngle
keywords:
  - draftoutward
  - icorefeaturedata
  - core
  - feature
  - data
  - draft
  - outward
  - boolean
  - vb
  - net
  - vba
readonly: null
---

# ICoreFeatureData.DraftOutward

Gets or sets whether draft is applied outward on this core feature.

## Signature

```csharp
System.Boolean DraftOutward {get; set;}
```
## Parameters

None.

## Return Value

True if draft is applied outward, false if not

## Remarks

To set this property,
ICoreFeatureData::UseDraft
must be true.

## Examples

- Get Core Feature Data (C#) (Get_Core_Feature_Example_CSharp.htm)
- Get Core Feature Data (VB.NET) (Get_Core_Feature_Example_VBNET.htm)
- Get Core Feature Data (VBA) (Get_Core_Feature_Example_VB.htm)

## See Also

- `ICoreFeatureData.DraftAngle`