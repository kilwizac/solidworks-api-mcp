---
type: method
interface: ISketch
member: SetSketchEditable
returns: void
parameters:
  -
    name: Editable
    type: System.Boolean
    description: True to make this sketch editable, false to make it read only
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketch.IsSketchEditable
keywords:
  - setsketcheditable
  - isketch
  - sketch
  - editable
  - boolean
  - void
---

# ISketch.SetSketchEditable

Sets whether this sketch is editable.

## Signature

```csharp
void SetSketchEditable( 
   System.Boolean
Editable
)
```
## Parameters

- `Editable` (System.Boolean): True to make this sketch editable, false to make it read only

## Return Value

Unknown.

## See Also

- `ISketch.IsSketchEditable`