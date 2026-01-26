---
type: property
interface: IFeatureManager
member: SolidForTrim
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - surface
  - see
  - also
  - isurface
  - trim
  - surfaces
  - solidfortrim
  - ifeaturemanager
  - feature
  - manager
  - solid
  - boolean
  - create
  - body
  - vb
  - net
  - vba
readonly: null
---

# IFeatureManager.SolidForTrim

Gets or sets whether a surface trim feature is a solid body or a surface body.

## Signature

```csharp
System.Boolean SolidForTrim {get; set;}
```
## Parameters

None.

## Return Value

True if a solid body, false if a surface body (see Remarks )

## Remarks

This property is only available when creating a surface trim feature. Call this property:
after calling
IFeatureManager::PreTrimSurface
before calling
IFeatureManager::PostTrimSurface
.

## Examples

- Create Solid Body Surface Trim Feature (C#) (Create_Solid_Body_Surface_Trim_Feature_Example_CSharp.htm)
- Create Solid Body Surface Trim Feature (VB.NET) (Create_Solid_Body_Surface_Trim_Feature_Example_VBNET.htm)
- Create Solid Body Surface Trim Feature (VBA) (Create_Solid_Body_Surface_Trim_Feature_Example_VB.htm)