---
type: method
interface: ISldWorks
member: UnInstallQuickTipGuide
returns: void
parameters:
  -
    name: PInterface
    type: System.Object
    description: Your add-in's Quick Tips
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.InstallQuickTipGuide
  - ISldWorks.RefreshQuickTipWindow
keywords:
  - quick
  - tips
  - uninstallquicktipguide
  - isldworks
  - sld
  - works
  - un
  - install
  - tip
  - guide
  - object
  - void
---

# ISldWorks.UnInstallQuickTipGuide

Uninstalls your add-in's Quick Tips

## Signature

```csharp
void UnInstallQuickTipGuide( 
   System.Object
PInterface
)
```
## Parameters

- `PInterface` (System.Object): Your add-in's Quick Tips

## Return Value

Unknown.

## Remarks

See
Quick Tips and Bubble ToopTips
for for details.

## See Also

- `ISldWorks.InstallQuickTipGuide`
- `ISldWorks.RefreshQuickTipWindow`