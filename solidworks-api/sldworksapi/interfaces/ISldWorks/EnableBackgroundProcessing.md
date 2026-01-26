---
type: property
interface: ISldWorks
member: EnableBackgroundProcessing
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - background
  - processing
  - drawings
  - see
  - also
  - idrawingdoc
  - open
  - document
  - drawing
  - enablebackgroundprocessing
  - isldworks
  - sld
  - works
  - enable
  - boolean
  - fire
  - notifications
  - events
  - vba
  - vb
  - net
readonly: null
---

# ISldWorks.EnableBackgroundProcessing

Gets or sets whether to enable background processing.

## Signature

```csharp
System.Boolean EnableBackgroundProcessing {get; set;}
```
## Parameters

None.

## Return Value

True to enable background processing, false to not

## Remarks

SOLIDWORKS recommends that you only use this property with
ISldWorks::IsBackgroundProcessingCompleted
and
IDrawingDoc::BackgroundProcessingOption
when you can quickly open a drawing document via the user interface, but that same drawing takes significantly more time to open programmatically.
To more efficiently and programmatically open a drawing document that requires a lot of CPU time and no user input:
Set ISldWorks::EnableBackgroundProcessing to true.
Use
ISldWorks Event BackgroundProcessingStartNotify
to handle the background processing start event.
Open the drawing document by calling either
ISldWorks::OpenDoc6
or
ISldWorks::OpenDoc7
.
Set IDrawingDoc::BackgroundProcessingOption to
swBackgroundProcessOption_e
.swBackgroundProcessing_DeferToApplication.
Call ISldWorks::IsBackgroundProcessingCompleted repeatedly, which polls the status of the open operation, to know when background processing ends.
Use
ISldWorks Event BackgroundProcessingEndNotify
to handle the background processing end event.
When the open operation is finished, set ISldWorks::EnableBackgroundProcessing to false.

## Examples

- Fire Notifications for Background Processing Events (VBA) (Fire_Notification_for_Background_Processing_Events_Example_VB.htm)
- Fire Notifications for Background Processing Events (VB.NET) (Fire_Notification_for_Background_Processing_Events_Example_VBNET.htm)
- Fire Notifications for Background Processing Events (C#) (Fire_Notification_for_Background_Processing_Events_Example_CSharp.htm)