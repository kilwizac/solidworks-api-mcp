---
type: property
interface: IComponent2
member: ReferencedConfiguration
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.CompConfigProperties5
  - IChainPatternFeatureData.ForceUseSeedConfiguration
  - IDerivedPatternFeatureData.ForceUseSeedConfiguration
  - ILocalCircularPatternFeatureData.ForceUseSeedConfiguration
  - ILocalCurvePatternFeatureData.ForceUseSeedConfiguration
  - ILocalLinearPatternFeatureData.ForceUseSeedConfiguration
  - ILocalSketchPatternFeatureData.ForceUseSeedConfiguration
  - IMirrorComponentFeatureData.ForceUseSeedConfiguration
keywords:
  - components
  - see
  - also
  - icomponent2
  - configurations
  - referencedconfiguration
  - component2
  - referenced
  - configuration
  - string
  - names
  - bodies
  - multibody
  - part
  - vba
  - transforms
  - assembly
  - change
  - traverse
  - component
  - feature
  - levels
  - using
  - recursion
  - vb
  - net
readonly: null
---

# IComponent2.ReferencedConfiguration

Gets or sets the active configuration used by this component.

## Signature

```csharp
System.String ReferencedConfiguration {get; set;}
```
## Parameters

None.

## Return Value

Name of the configuration

## Remarks

You can use this property to change the active configuration of:
a pattern seed component.
pattern instance components, but only when the pattern's ForceUseSeedConfiguration property is set to false.
When the configuration is changed, components might become suppressed or unsuppressed. This means that the array previously returned from
IComponent2::GetChildren
or
IComponent2::IGetChildren
becomes invalid. If an application is traversing an assembly and calls IComponent2::ReferencedConfiguration, then it should stop the traversal and start again by getting the assembly's
IModelDoc2
and active configuration. The array previously returned from IComponent2::GetChildren or IComponent2::IGetChildren should be released before calling IComponent2::ReferencedConfiguration. To hold onto the changed component, you can perform an extra AddRef() on that component before freeing the array.
After changing the referenced configuration, you must call
IModelDoc2::EditRebuild3
to display the changes.

## Examples

- Get Names of Bodies in Multibody Part (VBA) (Get_Names_of_Bodies_in_MultiBody_Part_Example_VB.htm)
- Get Transforms of Assembly Components (VBA) (Get_Transforms_of_Assembly_Components_Example_VB.htm)
- Change Referenced Configuration (VBA) (Change_Referenced_Configuration_Example_VB.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VBA) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VB.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (VB.NET) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_VBNET.htm)
- Traverse Assembly at Component and Feature Levels Using Recursion (C#) (Traverse_Assembly_at_Component_and_Feature_Levels_Using_Recursion_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.CompConfigProperties5`
- `IChainPatternFeatureData.ForceUseSeedConfiguration`
- `IDerivedPatternFeatureData.ForceUseSeedConfiguration`
- `ILocalCircularPatternFeatureData.ForceUseSeedConfiguration`
- `ILocalCurvePatternFeatureData.ForceUseSeedConfiguration`
- `ILocalLinearPatternFeatureData.ForceUseSeedConfiguration`
- `ILocalSketchPatternFeatureData.ForceUseSeedConfiguration`
- `IMirrorComponentFeatureData.ForceUseSeedConfiguration`