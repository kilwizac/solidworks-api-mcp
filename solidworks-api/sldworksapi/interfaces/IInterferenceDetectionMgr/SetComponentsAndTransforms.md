---
type: method
interface: IInterferenceDetectionMgr
member: SetComponentsAndTransforms
returns: System.Int32
parameters:
  -
    name: ComponentList
    type: System.Object
    description: Array of interfering components
  -
    name: TransformList
    type: System.Object
    description: Array of transforms
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IInterferenceDetectionMgr.GetComponentsAndTransforms
keywords:
  - components
  - see
  - also
  - icomponent2
  - interfering
  - setcomponentsandtransforms
  - iinterferencedetectionmgr
  - interference
  - detection
  - mgr
  - transforms
  - component
  - list
  - object
  - transform
  - int32
  - vb
  - net
  - vba
---

# IInterferenceDetectionMgr.SetComponentsAndTransforms

Sets the interfering components and their transforms.

## Signature

```csharp
System.Int32 SetComponentsAndTransforms( 
   System.Object
ComponentList
,
   System.Object
TransformList
)
```
## Parameters

- `ComponentList` (System.Object): Array of interfering components
- `TransformList` (System.Object): Array of transforms

## Return Value

Status as defined by swSetComponentsAndTransformsStatus_e

## Remarks

You must pass in absolute transforms to this method.
If you want to transform a component incrementally before interference detection, then you must multiply that incremental transform by the component's existing transform before passing in the resultant transform.
To produce the effect of identity transforms on components (i.e., the components do not move while participating in interference detection), the transforms for those components passed in can be null or Nothing. However, passing in null or Nothing for all of the transforms is interpreted as invalid input.
NOTE:
A null or Nothing is interpreted as the component’s existing transform (i.e., an identity incremental transform).

## Examples

- Set Components and Transforms for Interference Detection (C#) (Set_Components_and_Transforms_for_Interference_Detection_Example_CSharp.htm)
- Set Components and Transforms for Interference Detection (VB.NET) (Set_Components_and_Transforms_for_Interference_Detection_Example_VBNET.htm)
- Set Components and Transforms for Interference Detection (VBA) (Set_Components_and_Transforms_for_Interference_Detection_Example_VB.htm)

## See Also

- `IInterferenceDetectionMgr.GetComponentsAndTransforms`