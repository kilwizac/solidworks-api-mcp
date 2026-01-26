---
type: method
interface: IFeature
member: GetFirstDisplayDimension
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - IFeature.GetDisplayDimension
keywords:
  - traverse
  - display
  - dimensions
  - see
  - also
  - idisplaydimension
  - feature
  - getfirstdisplaydimension
  - ifeature
  - first
  - dimension
  - object
  - annotations
  - vb
  - net
  - vba
---

# IFeature.GetFirstDisplayDimension

Provides access to the dimensions that belong to this feature by returning the first display dimension associated with this feature.

## Signature

```csharp
System.Object GetFirstDisplayDimension()
```
## Parameters

None.

## Return Value

First IDisplayDimension object for this feature, or Nothing or null if there are no dimensions for this feature

## Remarks

Before you can get a feature's IDisplayDimension, use
IModelDoc2::SetUserPreferenceToggle
and swDisplayFeatureDimensions to display them.
All dimensions on this feature its sub-features are returned by either IFeature::GetFirstDisplayDimension and
IFeature::GetNextDisplayDimension
or
IFeature::EnumDisplayDimensions
. In the user-interface, this is equivalent to double-clicking a feature in the FeatureManager design tree to display all of the feature and sub-feature dimensions.
If you call this method from a sub-feature (for example, the sketch of a boss-extrude), then the IDisplayDimension object returned by IFeature::GetFirstDisplayDimension and IFeature::GetNextDisplayDimension contain only the dimensions found in the sketch.
Do not use
IAnnotation::Visible
property to modify this method's return value.
This method might not return the same display dimension every time it is called.

## Examples

- Traverse Annotations (C#) (Traverse_Annotations_Example_CSharp.htm)
- Traverse Annotations (VB.NET) (Traverse_Annotations_Example_VBNET.htm)
- Traverse Annotations (VBA) (Traverse_Annotations_Example_VB.htm)

## See Also

- `IFeature.GetDisplayDimension`