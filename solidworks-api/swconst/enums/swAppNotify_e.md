---
type: enum
name: swAppNotify_e
description: Application notifications.
member_count: 46
docset: swconst
categories:
  - constants
used_by: []
---

# swAppNotify_e

Application notifications.

## Values

| Member | Value | Description |
|---|---|---|
| `swAppActiveDocChangeNotify` | 4 | = ActiveDocChangeNotify |
| `swAppActiveModelDocChangeNotify` | 5 | = ActiveModelDocChangeNotify |
| `swAppBackgroundProcessingEndNotify` | 34 | = BackgroundProcessingEndNotify |
| `swAppBackgroundProcessingStartNotify` | 33 | = BackgroundProcessingStartNotify |
| `swAppBegin3DInterconnectTranslationNotify` | 37 | = Begin3DInterconnectTranslationNotify |
| `swAppBeginRecordNotify` | 24 | = Not used. |
| `swAppBeginTranslationNotify` | 16 | = BeginTranslationNotify |
| `swAppCommandCloseNotify` | 29 | = CommandCloseNotify |
| `swAppCommandOpenPreNotify` | 31 | = CommandOpenPreNotify |
| `swAppDestroyNotify` | 3 | = DestroyNotify |
| `swAppDisplayPaneActivationNotify` | 45 | = DisplayPaneActivationNotify |
| `swAppDocumentConversionNotify` | 9 | = DocumentConversionNotify |
| `swAppDocumentLoadNotify` | 27 | = Obsolete |
| `swAppDocumentLoadNotify2` | 28 | = DocumentLoadNotify2 |
| `swAppEnd3DInterconnectTranslationNotify` | 38 | = End3DInterconnectTranslationNotify |
| `swAppEndRecordNotify` | 25 | = Not used. |
| `swAppEndTranslationNotify` | 16 | = EndTranslationNotify |
| `swAppFileCloseNotify` | 32 | = FileCloseNotify |
| `swAppFileNewNotify` | 2 | = Obsolete |
| `swAppFileNewNotify2` | 12 | = FileNewNotify2 NOTE: Because it is possible to have a NULL active document when an add-in is notified using swAppFileOpenNotify2, use ISldWorks::IGetOpenDocumentByName2 instead of ISldWorks::IActiveDoc2 . |
| `swAppFileNewPreNotify` | 26 | = FileNewPreNotify |
| `swAppFileOpenNotify` | 1 | = Obsolete |
| `swAppFileOpenNotify2` | 13 | = FileOpenNotify2 |
| `swAppFileOpenPostNotify` | 22 | = FileOpenPostNotify |
| `swAppFileOpenPreNotify` | 21 | = FileOpenPreNotify |
| `swAppInterfaceBrightnessThemeChangeNotify` | 35 | = InterfaceBrightnessThemeChangeNotify |
| `swAppJournalWriteNotify` | 27 | = Not used. |
| `swAppLightPMCreateNotify` |  | Not used. |
| `swAppLightSheetCreateNotify` | 18 | = LightSheetCreateNotify |
| `swAppLightweightComponentOpenNotify` | 10 | = Not used. |
| `swAppNonNativeFileOpenNotify` | 7 | = NonNativeFileOpenNotify |
| `swAppOn3DExperienceStateChangeNotify` | 46 | = On3DExperienceStateChangeNotify |
| `swAppOnIdleNotify` | 20 | = OnIdleNotify |
| `swAppPromptForFilenameNotify` | 15 | = PromptForFilenameNotify |
| `swAppPromptForMultipleFilenamesNotify` | 30 | = PromptForMultipleFileNamesNotify |
| `swAppPropertySheetCreateNotify` | 6 | = PropertySheetCreateNotify |
| `swAppReferencedFilePreNotify` | 23 | = ReferencedFilePreNotify |
| `swAppReferencedFilePreNotify2` | 36 | = ReferencedFilePreNotify2 |
| `swAppReferenceNotFoundNotify` | 14 | = ReferenceNotFoundNotify |
| `swAppStandardsDatabaseChangeNotify` | 19 | = Not used. |
| `swAppTaskPaneCollapseNotify` | 44 | = TaskPaneCollapseNotify |
| `swAppTaskPaneExpandNotify` | 43 | = TaskPaneExpandNotify |
| `swAppTaskPaneHideNotify` | 41 | = TaskPaneHideNotify |
| `swAppTaskPanePinnedNotify` | 39 | = TaskPanePinnedNotify |
| `swAppTaskPaneShowNotify` | 42 | = TaskPaneShowNotify |
| `swAppTaskPaneUnpinnedNotify` | 40 | = TaskPaneUnpinnedNotify |