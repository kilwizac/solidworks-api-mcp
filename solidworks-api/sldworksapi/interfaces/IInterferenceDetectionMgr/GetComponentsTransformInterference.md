---
type: method
interface: IInterferenceDetectionMgr
member: GetComponentsTransformInterference
returns: System.Boolean
parameters:
  -
    name: Component
    type: System.Object
    description: Array of IComponent2 s with which to detect interference
  -
    name: Transform
    type: System.Object
    description: IMathTransform
  -
    name: InterferingComponent
    type: System.Object
    description: Array of interfering IComponent2 s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IInterferenceDetectionMgr.CreateFastenersFolder
  - IInterferenceDetectionMgr.GetComponentsTransformInterferenceCount
  - IInterferenceDetectionMgr.GetInterferenceComponents
  - IInterferenceDetectionMgr.GetInterferences
  - IInterferenceDetectionMgr.IGetComponentsTransformInterference
  - IInterferenceDetectionMgr.IGetInterferenceComponents
  - IInterferenceDetectionMgr.IGetInterferences
  - IInterferenceDetectionMgr.IgnoreHiddenBodies
  - IInterferenceDetectionMgr.IncludeMultibodyPartInterferences
  - IInterferenceDetectionMgr.MakeInterferingPartsTransparent
  - IInterferenceDetectionMgr.NonInterferingComponentDisplay
  - IInterferenceDetectionMgr.ShowIgnoredInterferences
  - IInterferenceDetectionMgr.TreatCoincidenceAsInterference
  - IInterferenceDetectionMgr.TreatSubAssembliesAsComponents
keywords:
  - components
  - see
  - also
  - icomponent2
  - interfering
  - getcomponentstransforminterference
  - iinterferencedetectionmgr
  - interference
  - detection
  - mgr
  - transform
  - component
  - object
  - boolean
  - detect
  - interferences
  - using
  - vba
  - vb
  - net
---

# IInterferenceDetectionMgr.GetComponentsTransformInterference

Calculates and gets the interfering components for the specified components and math transform.

## Signature

```csharp
System.Boolean GetComponentsTransformInterference( 
   System.Object
Component
,
   System.Object
Transform
,
   out System.Object
InterferingComponent
)
```
## Parameters

- `Component` (System.Object): Array of IComponent2 s with which to detect interference
- `Transform` (System.Object): IMathTransform
- `InterferingComponent` (System.Object): Array of interfering IComponent2 s

## Return Value

True if successful, false if not

## Examples

- Detect Interferences Using a Transform (VBA) (Detect_Interferences_Using_a_Transform_Example_VB.htm)
- Detect Interferences Using a Transform (VB.NET) (Detect_Interferences_Using_a_Transform_Example_VBNET.htm)
- Detect Interferences Using a Transform (C#) (Detect_Interferences_Using_a_Transform_Example_CSharp.htm)

## See Also

- `IInterferenceDetectionMgr.CreateFastenersFolder`
- `IInterferenceDetectionMgr.GetComponentsTransformInterferenceCount`
- `IInterferenceDetectionMgr.GetInterferenceComponents`
- `IInterferenceDetectionMgr.GetInterferences`
- `IInterferenceDetectionMgr.IGetComponentsTransformInterference`
- `IInterferenceDetectionMgr.IGetInterferenceComponents`
- `IInterferenceDetectionMgr.IGetInterferences`
- `IInterferenceDetectionMgr.IgnoreHiddenBodies`
- `IInterferenceDetectionMgr.IncludeMultibodyPartInterferences`
- `IInterferenceDetectionMgr.MakeInterferingPartsTransparent`
- `IInterferenceDetectionMgr.NonInterferingComponentDisplay`
- `IInterferenceDetectionMgr.ShowIgnoredInterferences`
- `IInterferenceDetectionMgr.TreatCoincidenceAsInterference`
- `IInterferenceDetectionMgr.TreatSubAssembliesAsComponents`