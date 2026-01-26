---
type: method
interface: ISldWorks
member: InstallQuickTipGuide
returns: void
parameters:
  -
    name: PInterface
    type: System.Object
    description: Your add-in's copy of the Quick Tips
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.RefreshQuickTipWindow
  - ISldWorks.UnInstallQuickTipGuide
keywords:
  - quick
  - tips
  - bubble
  - tooltips
  - installquicktipguide
  - isldworks
  - sld
  - works
  - install
  - tip
  - guide
  - object
  - void
---

# ISldWorks.InstallQuickTipGuide

Implements your add-in's copy of the Quick Tips.

## Signature

```csharp
void InstallQuickTipGuide( 
   System.Object
PInterface
)
```
## Parameters

- `PInterface` (System.Object): Your add-in's copy of the Quick Tips

## Return Value

Unknown.

## Remarks

The name of your add-in's Quick Tips is added to the SOLIDWORKS Help menu. See
ISwQuickTip::MenuName
for details.
See
Quick Tips and Bubble ToopTips
for for details.

## See Also

- `ISldWorks.RefreshQuickTipWindow`
- `ISldWorks.UnInstallQuickTipGuide`