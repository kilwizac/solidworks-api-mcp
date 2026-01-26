---
type: property
interface: IMaterialVisualPropertiesData
member: ApplyAppearance
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - texture
  - see
  - also
  - itexture
  - appearance
  - applyappearance
  - imaterialvisualpropertiesdata
  - material
  - visual
  - properties
  - data
  - apply
  - boolean
readonly: null
---

# IMaterialVisualPropertiesData.ApplyAppearance

Gets or sets whether to apply the appearance of material.

## Signature

```csharp
System.Boolean ApplyAppearance {get; set;}
```
## Parameters

None.

## Return Value

True to apply the appearance of material, false to not (see Remarks )

## Remarks

If this property is...
Then...
False
There is no change in the appearance of the body when material is changed.
True
The appearance of the body changes when material is changed.

## Examples

- IMaterialVisualPropertiesData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMaterialVisualPropertiesData)