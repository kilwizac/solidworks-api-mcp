---
type: method
interface: IModelDocExtension
member: HasLegacyCThreads
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - ICThread
  - IView.GetCThreads
  - IView.GetFirstCThread
keywords:
  - haslegacycthreads
  - imodeldocextension
  - model
  - doc
  - extension
  - has
  - legacy
  - threads
  - boolean
---

# IModelDocExtension.HasLegacyCThreads

Gets whether this model has legacy cosmetic threads.

## Signature

```csharp
System.Boolean HasLegacyCThreads()
```
## Parameters

None.

## Return Value

True if the model has legacy cosmetic threads, false if not

## Remarks

If this method returns true, you can call
IModelDocExtension::UpgradeLegacyCThreads
to upgrade cosmetic thread features to the latest cosmetic thread architecture.

## See Also

- `ICThread`
- `IView.GetCThreads`
- `IView.GetFirstCThread`