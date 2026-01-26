---
type: method
interface: IComponent2
member: GetCorresponding
returns: System.Object
parameters:
  -
    name: InputObject
    type: System.Object
    description: Pointer to the Dispatch object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetCorrespondingEntity
  - IComponent2.IGetCorrespondingEntity
  - IModelDocExtension.GetCorresponding
  - IModelDocExtension.GetCorrespondingEntity
keywords:
  - corresponding
  - objects
  - getcorresponding
  - icomponent2
  - component2
  - input
  - object
  - assembly
  - component
  - vb
  - net
  - vba
---

# IComponent2.GetCorresponding

Gets the corresponding object in the context of the assembly for a specific instance of the component.

## Signature

```csharp
System.Object GetCorresponding( 
   System.Object
InputObject
)
```
## Parameters

- `InputObject` (System.Object): Pointer to the Dispatch object

## Return Value

Pointer to the corresponding object in the context of the assembly for an instance of the component

## Remarks

Given an object in an underlying component document, this method gets the corresponding object in the context of the assembly for a specific instance of that component document (i.e., there can be more than one instance).
You can use this method with any object assigned a persistent reference or object ID; for example,
IAnnotation
,
IFeature
,
ISketch
,
ISketchSegment
, etc.

## Examples

- Get Corresponding Objects in Assembly Component (C#) (Get_Corresponding_Objects_in_Assembly_Component_Example_CSharp.htm)
- Get Corresponding Objects in Assembly Component (VB.NET) (Get_Corresponding_Objects_in_Assembly_Component_Example_VBNET.htm)
- Get Corresponding Objects in Assembly Component (VBA) (Get_Corresponding_Objects_in_Assembly_Component_Example_VBNET.htm)

## See Also

- `IComponent2.GetCorrespondingEntity`
- `IComponent2.IGetCorrespondingEntity`
- `IModelDocExtension.GetCorresponding`
- `IModelDocExtension.GetCorrespondingEntity`