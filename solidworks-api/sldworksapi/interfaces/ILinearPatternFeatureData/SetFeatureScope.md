---
type: method
interface: ILinearPatternFeatureData
member: SetFeatureScope
returns: System.Boolean
parameters:
  -
    name: FeatureScopeOption
    type: System.Boolean
    description: True to specify affected bodies, false to apply the pattern to all bodies every time the feature regenerates (see Remarks )
  -
    name: AutoSelectBodies
    type: System.Boolean
    description: True to automatically select all bodies intersected by this pattern feature, false to specify affected bodies (see Remarks )
  -
    name: Bodies
    type: System.Object
    description: Array of bodies to be affected; valid only if FeatureScopeOption is true and AutoSelectBodies is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILinearPatternFeatureData.AutoSelect
  - ILinearPatternFeatureData.FeatureScope
  - ILinearPatternFeatureData.FeatureScopeBodies
keywords:
  - setfeaturescope
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - scope
  - option
  - boolean
  - auto
  - select
  - bodies
  - object
---

# ILinearPatternFeatureData.SetFeatureScope

Sets the feature scope, whether to autoselect the affected bodies, and the affected bodies in this linear pattern feature.

## Signature

```csharp
System.Boolean SetFeatureScope( 
   System.Boolean
FeatureScopeOption
,
   System.Boolean
AutoSelectBodies
,
   System.Object
Bodies
)
```
## Parameters

- `FeatureScopeOption` (System.Boolean): True to specify affected bodies, false to apply the pattern to all bodies every time the feature regenerates (see Remarks )
- `AutoSelectBodies` (System.Boolean): True to automatically select all bodies intersected by this pattern feature, false to specify affected bodies (see Remarks )
- `Bodies` (System.Object): Array of bodies to be affected; valid only if FeatureScopeOption is true and AutoSelectBodies is false

## Return Value

True if feature scope set successfully, false if not (see Remarks )

## Remarks

If this method returns false, then default values for FeatureScopeOption and AutoSelectBodies are set. A subsequent call to
IFeatureManager::CreateFeature
creates the feature with a FeatureScopeOption of true and an AutoSelectBodies of true.
After calling IFeature::ModifyDefinition, call
IFeature::GetErrorCode2
to determine what's wrong and then take necessary remedial action.
For more information, see the
Linear Patterns and the Linear Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.

## See Also

- `ILinearPatternFeatureData.AutoSelect`
- `ILinearPatternFeatureData.FeatureScope`
- `ILinearPatternFeatureData.FeatureScopeBodies`