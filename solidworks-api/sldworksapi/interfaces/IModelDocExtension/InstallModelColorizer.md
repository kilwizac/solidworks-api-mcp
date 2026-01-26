---
type: method
interface: IModelDocExtension
member: InstallModelColorizer
returns: void
parameters:
  -
    name: PInterface
    type: System.Object
    description: Pointer to your implemented interface
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.RemoveModelColorizer
keywords:
  - colorizer
  - see
  - also
  - iswcolorcontour1
  - install
  - installmodelcolorizer
  - imodeldocextension
  - model
  - doc
  - extension
  - object
  - void
---

# IModelDocExtension.InstallModelColorizer

Installs your implemented interface of the ISwColorContour interface.

## Signature

```csharp
void InstallModelColorizer( 
   System.Object
PInterface
)
```
## Parameters

- `PInterface` (System.Object): Pointer to your implemented interface

## Return Value

Unknown.

## Remarks

After your implemented interface is installed, the SOLIDWORKS Design software calls
ISwColorContour::Value
on each graphical update. Your implemented interface must provide the corresponding color for each vertex and the value associated with each vertex. This value is displayed when the cursor is over that vertex.
Additionally, when the cursor is over the model, the SOLIDWORKS Design software calls
ISwColorContour::DisplayString
and passes the value to be formatted by your implemented interface, which the SOLIDWORKS Design software will then display.

## See Also

- `IModelDocExtension.RemoveModelColorizer`