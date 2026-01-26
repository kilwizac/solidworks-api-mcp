---
type: method
interface: IView
member: SetName2
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name of drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetName2
keywords:
  - name
  - drawing
  - view
  - views
  - see
  - also
  - iview
  - names
  - setname2
  - name2
  - string
  - boolean
---

# IView.SetName2

Sets the name of this drawing view, as displayed in the FeatureManager design tree.

## Signature

```csharp
System.Boolean SetName2( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of drawing view

## Return Value

True if the name of the drawing view is set, false if not

## Remarks

The drawing view name that you specify:
must be unique in the FeatureManager design tree.
not contain any of the SOLIDWORKS reserved special characters.
If either of these conditions is not met, then this method returns false and the name of the drawing view is not changed.
You cannot change the drawing view name for detail views and section views. If you attempt to do so, then false if returned and the drawing view name is not changed.

## See Also

- `IView.GetName2`