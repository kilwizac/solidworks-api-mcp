---
type: property
interface: ISurfaceKnitFeatureData
member: UseTryToFormSolid
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - usetrytoformsolid
  - isurfaceknitfeaturedata
  - surface
  - knit
  - feature
  - data
  - use
  - try
  - form
  - solid
  - boolean
  - create
  - vb
  - net
  - vba
readonly: null
---

# ISurfaceKnitFeatureData.UseTryToFormSolid

Gets or sets whether to try to form a solid body when creating the Surface-Knit feature.

## Signature

```csharp
System.Boolean UseTryToFormSolid {get; set;}
```
## Parameters

None.

## Return Value

True to true to form a solid body, false to not

## Remarks

If
ISurfaceKnitFeatureData::UseGapFilters
is true, then this property is automatically enabled or disabled depending on whether a solid body can be created from the input bodies.
If you set this property to true, then
knit tolerance
is automatically updated so that the Surface-Knit feature can be created as a solid body.
See
Accessing Selections that Define Features
for additional details.

## Examples

- Create Knit Surface Feature (VB.NET) (Create_Surface_Knit_Feature_Example_VBNET.htm)
- Create Knit Surface Feature (VBA) (Create_Surface_Knit_Feature_Example_VB6.htm)
- Create Knit Surface Feature (C#) (Create_Surface_Knit_Feature_Example_CSharp.htm)