---
type: method
interface: IModelDocExtension
member: GetCorresponding
returns: System.Object
parameters:
  -
    name: InputObject
    type: System.Object
    description: Pointer to the Dispatch object in the assembly context
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - ui
related:
  - IComponent2.GetCorresponding
  - IComponent2.GetCorrespondingEntity
  - IComponent2.IGetCorrespondingEntity
  - IModelDocExtension.GetCorrespondingEntity
keywords:
  - getcorresponding
  - imodeldocextension
  - model
  - doc
  - extension
  - corresponding
  - input
  - object
  - note
  - assembly
  - vba
  - part
---

# IModelDocExtension.GetCorresponding

Obsolete. Superseded by IModelDocExtension::GetCorresponding2.

## Signature

```csharp
System.Object GetCorresponding( 
   System.Object
InputObject
)
```
## Parameters

- `InputObject` (System.Object): Pointer to the Dispatch object in the assembly context

## Return Value

Pointer to the corresponding object in the underlying part, assembly, or subassembly document

## Remarks

Given an object in an assembly context, this method gets the corresponding object in the underlying component document regardless of whether the document is a part or an assembly.
You can use this method with any object assigned a persistent reference ID; for example, a
IFeature
,
IAnnotation
or
ISketch
object.

## Examples

- Get Corresponding Note in Assembly (VBA) (Get_Corresponding_Note_in_Assembly_Example_VB.htm)
- Get Corresponding Note in Part (VBA) (Get_Corresponding_Note_in_Part_Example_VB.htm)

## See Also

- `IComponent2.GetCorresponding`
- `IComponent2.GetCorrespondingEntity`
- `IComponent2.IGetCorrespondingEntity`
- `IModelDocExtension.GetCorrespondingEntity`