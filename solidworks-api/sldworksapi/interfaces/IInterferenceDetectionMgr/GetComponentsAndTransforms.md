---
type: method
interface: IInterferenceDetectionMgr
member: GetComponentsAndTransforms
returns: System.Boolean
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
  - IInterferenceDetectionMgr.SetComponentsAndTransforms
keywords:
  - components
  - see
  - also
  - icomponent2
  - interfering
  - getcomponentsandtransforms
  - iinterferencedetectionmgr
  - interference
  - detection
  - mgr
  - transforms
  - component
  - list
  - object
  - transform
  - boolean
  - run
  - vba
  - vb
  - net
---

# IInterferenceDetectionMgr.GetComponentsAndTransforms

Gets the interfering components and their transforms.

## Signature

```csharp
System.Boolean GetComponentsAndTransforms( 
   out System.Object
ComponentList
,
   out System.Object
TransformList
)
```
## Parameters

- `ComponentList` (System.Object): Array of interfering components
- `TransformList` (System.Object): Array of transforms

## Return Value

True if successful, false if not

## Examples

- Run Interference Detection (VBA) (Run_Interference_Detection_Example_VB.htm)
- Run Interference Detection (VB.NET) (Run_Interference_Detection_Example_VBNET.htm)
- Run Interference Detection (C#) (Run_Interference_Detection_Example_CSharp.htm)

## See Also

- `IInterferenceDetectionMgr.SetComponentsAndTransforms`