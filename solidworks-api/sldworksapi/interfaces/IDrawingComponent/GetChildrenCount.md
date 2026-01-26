---
type: method
interface: IDrawingComponent
member: GetChildrenCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrawingComponent.GetChildren
keywords:
  - getchildrencount
  - idrawingcomponent
  - drawing
  - component
  - children
  - count
  - int32
  - create
  - section
  - view
  - specified
  - location
  - vba
---

# IDrawingComponent.GetChildrenCount

Gets the number of child components for this drawing component.

## Signature

```csharp
System.Int32 GetChildrenCount()
```
## Parameters

None.

## Return Value

Number of child components for this drawing component

## Remarks

Call this method before calling
IDrawingComponent::IGetChildren
.

## Examples

- Create Section View at Specified Location (VBA) (Create_Section_View_at_Specified_Location_Example_VB.htm)

## See Also

- `IDrawingComponent.GetChildren`