---
type: method
interface: ISldWorks
member: IGetEnvironment
returns: Environment
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetEnvironment
keywords:
  - igetenvironment
  - isldworks
  - sld
  - works
  - environment
---

# ISldWorks.IGetEnvironment

Gets the IEnvironment object.

## Signature

```csharp
Environment IGetEnvironment()
```
## Parameters

None.

## Return Value

IEnvironment object

## Remarks

All numeric values returned from the IEnvironment object are relative to a unit text height of 1.0; i.e., if a symbol has a text height of 0.15, then you the numeric values returned by 0.15.

## See Also

- `ISldWorks.GetEnvironment`