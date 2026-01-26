---
type: method
interface: IFeature
member: GetNextDisplayDimension
returns: System.Object
parameters:
  -
    name: DispIn
    type: System.Object
    description: IDisplayDimension object obtained with IFeature::GetFirstDisplayDimension or from your previous call to this method
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - IFeature.GetDisplayDimension
keywords:
  - display
  - dimensions
  - see
  - also
  - idisplaydimension
  - feature
  - traverse
  - getnextdisplaydimension
  - ifeature
  - next
  - dimension
  - disp
  - object
  - annotations
  - vb
  - net
  - vba
---

# IFeature.GetNextDisplayDimension

Gets the next display dimension associated with this feature.

## Signature

```csharp
System.Object GetNextDisplayDimension( 
   System.Object
DispIn
)
```
## Parameters

- `DispIn` (System.Object): IDisplayDimension object obtained with IFeature::GetFirstDisplayDimension or from your previous call to this method

## Return Value

Next IDisplayDimension object based on the DispIn argument, or NULL if there are no more dimensions

## Remarks

Before you can get a feature's IDisplayDimension, use
IModelDoc2::SetUserPreferenceToggle
and swDisplayFeatureDimension to display them.
All dimensions on this feature and its sub-features are returned by either
IFeature::GetFirstDisplayDimension
and IFeature::GetNextDisplayDimension or
IFeature::EnumDisplayDimensions
. In the user-interface, this is equivalent to double-clicking a feature in the FeatureManager design tree to display all of the feature and sub-feature dimensions.
If you call this method from a sub-feature (for example, the sketch of a boss-extrude), then the IDisplayDimension object returned by IFeature::GetFirstDisplayDimension and IFeature::GetNextDisplayDimension contain only the dimensions found in the sketch.
This method might not always return display dimensions in the same order.

## Examples

- Traverse Annotations (C#) (Traverse_Annotations_Example_CSharp.htm)
- Traverse Annotations (VB.NET) (Traverse_Annotations_Example_VBNET.htm)
- Traverse Annotations (VBA) (Traverse_Annotations_Example_VB.htm)

## See Also

- `IFeature.GetDisplayDimension`