---
type: method
interface: IView
member: GetDatumOriginCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDatumOrigins
keywords:
  - datum
  - origins
  - see
  - also
  - idatumorigin
  - number
  - getdatumorigincount
  - iview
  - view
  - origin
  - count
  - int32
---

# IView.GetDatumOriginCount

Gets the number of datum origins on this drawing view.

## Signature

```csharp
System.Int32 GetDatumOriginCount()
```
## Parameters

None.

## Return Value

Number of datum origins

## Remarks

Call this method before calling
IView::IGetDatumOrigins
to determine the size of the array for that method.

## See Also

- `IView.GetDatumOrigins`