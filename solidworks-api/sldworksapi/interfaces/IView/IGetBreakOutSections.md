---
type: method
interface: IView
member: IGetBreakOutSections
returns: Feature
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of broken-out sections in this view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetBreakOutSections
keywords:
  - view
  - see
  - also
  - iview
  - broken
  - out
  - sections
  - drawing
  - views
  - igetbreakoutsections
  - break
  - count
  - int32
  - feature
---

# IView.IGetBreakOutSections

Gets all of the broken-out sections in this view.

## Signature

```csharp
Feature IGetBreakOutSections( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of broken-out sections in this view

## Return Value

In-process, unmanaged C++: Pointer to an array of broken-out section features VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IView::GetBreakOutSectionCount
to get the value for Count.

## See Also

- `IView.GetBreakOutSections`