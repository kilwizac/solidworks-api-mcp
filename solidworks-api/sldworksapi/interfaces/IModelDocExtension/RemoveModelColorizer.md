---
type: method
interface: IModelDocExtension
member: RemoveModelColorizer
returns: void
parameters:
  -
    name: PInterface
    type: System.Object
    description: Pointer to your installed implemented interface
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.InstallModelColorizer
keywords:
  - colorizer
  - see
  - also
  - iswcolorcontour1
  - remove
  - removemodelcolorizer
  - imodeldocextension
  - model
  - doc
  - extension
  - object
  - void
---

# IModelDocExtension.RemoveModelColorizer

Removes your installed implemented interface of the ISwColorContour interface.

## Signature

```csharp
void RemoveModelColorizer( 
   System.Object
PInterface
)
```
## Parameters

- `PInterface` (System.Object): Pointer to your installed implemented interface

## Return Value

Unknown.

## See Also

- `IModelDocExtension.InstallModelColorizer`